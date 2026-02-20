import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage(
    {
        name: "amplifyNotesDrive",
        access: (allow) => (
            {
                "media/{entry_id}/*": [
                    allow.entity("identity").to(
                        [
                            "read",
                            "write",
                            "delete",
                        ]
                    ),

                ],
                "public/*": [
                    allow.authenticated.to(
                        [
                            "read",
                            "write"

                        ]
                    ),
                    allow.guest.to(
                        [
                            "read"
                        ]
                    )
                ]
            }
        ),
    }
);