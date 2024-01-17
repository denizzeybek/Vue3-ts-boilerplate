<template>
  <main class="flex items-center justify-center text-center">
    <Col :xs="20" :sm="16" :md="12" :lg="10" :xl="8" :xxl="6">
      <Form layout="vertical" class="w-full">
        <RInput label="Email" name="email" placeholder="Enter you email" type="email" />
        <RInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        <Button type="primary" block :loading="isSubmitting" @click="submitHandler">
          Sign in
        </Button>
      </Form>
    </Col>
  </main>
</template>

<script setup lang="ts">
import { object, string } from 'yup'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { useRToast } from '@/composables/useRToast'
import { Form, Button, Col } from 'ant-design-vue'

const { showErrorMessage } = useRToast()

const validationSchema = toTypedSchema(
  object({
    email: string().required().email().label('Email'),
    password: string().required().min(6).label('Password')
  })
)

const { handleSubmit, isSubmitting } = useForm({
  validationSchema
})

const submitHandler = handleSubmit(async (values) => {
  try {
    console.log('values ', values)
  } catch (error: any) {
    const message = error.body?.data?.message ?? 'Something went wrong'
    showErrorMessage(message)
  }
})
</script>
