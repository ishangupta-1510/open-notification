import { createPublicEndPointWithZod } from "src/common/createEndPointWithZod";
import { z } from "zod";


const userLoginEndpoint = createPublicEndPointWithZod(
    {
        email: z.string(),
        password: z.string()
    },
    {
        response: z.string()
    },
    async(input) => {
        const 
    }
)