import { fastify } from 'fastify'
import { getAllPrompsRoutes } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAICompletionRoute } from './routes/generate-ai-completion'
import { fastifyCors } from '@fastify/cors'

const app = fastify()


app.register(fastifyCors, {
  origin: '*',
  
})
app.register(getAllPrompsRoutes)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!!')
})