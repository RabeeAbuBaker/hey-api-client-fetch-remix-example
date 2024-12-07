import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
    client: '@hey-api/client-fetch',
    input: 'https://raw.githubusercontent.com/swagger-api/swagger-petstore/master/src/main/resources/openapi.yaml',
    experimentalParser: true,
    output: {
        format: 'prettier',
        path: 'app/models/pet',
    },
})
