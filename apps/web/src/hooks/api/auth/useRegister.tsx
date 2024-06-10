import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface regsiterArgs extends Omit<User, 'id'> {
  password: string;
}

const useRegister = () => {
  const { toast } = useToast();
  const router = useRouter();
  const register = async (payload: Omit<User, 'id'>) => {
    try {
      await axiosInstance.post<regsiterArgs>('/auth/register', payload);
      toast({
        description: 'Register Success',
      });
      router.push('/login')
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          description: error?.response?.data,
        });
      }
    }
  };
  return { register };
};
export default useRegister;
