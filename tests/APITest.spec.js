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