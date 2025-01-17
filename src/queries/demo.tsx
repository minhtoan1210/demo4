import { useMutation } from '@tanstack/react-query'
import demoApiRequest from '../apiRequests/demo'
export const useDemoMutation = () => {
    return useMutation({
      mutationFn: demoApiRequest.demo,
    })
  }