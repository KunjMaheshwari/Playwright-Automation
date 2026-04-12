import { expect, test } from "@playwright/test";

let userId;

test("Get Request", async ({ request }) => {
    const response = await request.get("https://regres.in/api/users?page=2");
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test("Create user", async ({ request }) => { //Post request
    const response = await request.post("https://regres.in/api/users",
        {
            data: {
                "name": "Kunj Maheshwari",
                "age": "23"
            },
            headers: {
                "Accept": "application/json"
            }
        }
    )

    console.log(await response.json());

    expect(response.status()).toBe(201);
    
    let res = await response.json();
    userId = res.id;
})

// the id which is generated is now used to update the record and delete the record
test("Update user", async ({ request }) => {
    const response = await request.put("https://regres.in/api/users" + userId, {
        data:{
            "name": "Kunj",
            "age": "24"
        },
        headers:{
            "Accept": "application/json"
        }
    })

    console.log(await response.json());

    expect(response.status()).toBe(200);
})

test("Delete User", async ({ request }) => {
    const response = await request.delete("https://regres.in/api/users"+userId);

    expect(response.status()).toBe(204);
})

test("GET posts: validate status, keys, schema and log title", async ({ request }) => {
    const endpoint = "https://jsonplaceholder.typicode.com/posts";

    const response = await request.get(endpoint);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);

    const firstPost = responseBody[0];

    expect(firstPost).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String)
        })
    );

    // Optional JSON-schema-style validation for data types.
    const postSchema = {
        type: "object",
        required: ["id", "title", "body"],
        properties: {
            id: { type: "number" },
            title: { type: "string" },
            body: { type: "string" }
        }
    };

    const validateWithSchema = (item, schema) => {
        if (schema.type !== "object" || typeof item !== "object" || item === null) {
            return false;
        }

        const hasRequiredKeys = schema.required.every((key) => key in item);
        if (!hasRequiredKeys) {
            return false;
        }

        return Object.entries(schema.properties).every(([key, rule]) => {
            return typeof item[key] === rule.type;
        });
    };

    expect(validateWithSchema(firstPost, postSchema)).toBeTruthy();

    console.log("Post title:", firstPost.title);
})