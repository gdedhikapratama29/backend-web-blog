import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "1.0.0",   
        title: "Dokumentasi API BLOG",
        description: "API untuk blog",
    },

    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local server",
        },
        {
            url: "https://backend-web-blog-seven.vercel.app/api",
            description: "Deploy server",
        }
    ],

    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            LoginRequest: {
                indentifier: "davidlaid",
                password: "12345"
            },
        },
    },
};

const OutputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(OutputFile, endpointsFiles, doc);