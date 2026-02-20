import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage(
    {
        name: "amplifyNotesDrive",
        access: (allow) => (
            {
                "media/{entity_id}/*": [
                    allow.entity("identity").to(
                        [
                            "read",
                            "write",
                            "delete"
                        ]
                    ),
                    // allow.authenticated.to(
                    //     [
                    //         "read"
                    //     ]
                    // )
                ],
                // "public/*": [
                //     allow.authenticated.to(
                //         [
                //             "read",
                //             "write"
                //         ]
                //     ),
                //     allow.guest.to(
                //         [
                //             "read"
                //         ]
                //     )
                // ]
            }
        ),
    }
);