'use client';
import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { useAppDispatch } from '@/redux/hooks';
import { loginAction } from '@/redux/slices/userSlice';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface LoginArgs extends Pick<User, 'email'> {
  password: string;
}

interface LoginResponse {
  message: string;
  data: User;
}
const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const login = async (payload: LoginArgs) => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>(
        '/auth/login',
        payload,
      );
      toast({
        description: 'Login Success',
      });
      dispatch(loginAction(data.data));
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          description: error?.response?.data,
        });
      }
    }
  };
  return { login };
};

export default useLogin;
