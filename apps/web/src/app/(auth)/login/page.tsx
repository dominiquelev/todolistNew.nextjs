'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import useLogin from '@/hooks/api/auth/useLogin';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { validationSchemaLogin } from '../validationSchema';

const Login = () => {
  const { login } = useLogin();
  const router = useRouter();
  const { errors, touched, handleBlur, handleChange, handleSubmit, values } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchemaLogin,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <section className="relative h-screen w-full bg-[url('/assets/images/bg.login.jpg')] bg-left-bottom bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent">
        <div className="grid md:grid-cols-2 py-12 md:mt-7 container mx-auto px-4 md:px-12 overflow-hidden">
          {/* form section */}
          <div className="flex items-center justify-center">
            <Card className="z-50 border-none mx-auto w-full max-w-md">
              <CardHeader className="space-y-2 mr-28">
                <CardTitle className="text-[32px] md:text-4xl font-bold text-white inline-block">
                  WELCOME BACK <span className=" text-[#2167A7]">.</span>
                </CardTitle>
                <CardDescription className="text-[#515866]">
                  please login here and remember your list for today..
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <Label className="text-white text-base">Email</Label>
                    <FormInput
                      name="email"
                      label=""
                      error={errors.email}
                      isError={!!touched.email && !!errors.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="email"
                      type="text"
                      value={values.email}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-white text-base">Password</Label>
                    <FormInput
                      name="password"
                      label=""
                      error={errors.password}
                      isError={!!touched.password && !!errors.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="password"
                      type="password"
                      value={values.password}
                    />
                  </div>
<div className='text-white flex justify-between'>

                  <Button type="submit" className="bg-[#2167A7] w-1/3">
                    log in
                  </Button>
                  <p className="  text-xs content-center">
                    don&apos;t have an account?{' '}
                    <span
                      onClick={() => router.push('/register')}
                      className="cursor-pointer hover:underline"
                    >
                      register now
                    </span>
                  </p>
</div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* <div className="flex items-center justify-center">
            <Card className="z-50 border-none mx-auto w-full max-w-md">
              <CardHeader className="space-y-2 mr-20">
                <CardTitle className="text-[32px] md:text-4xl font-bold text-white inline-block">
                  WELCOME BACK <span className=" text-[#2167A7]">.</span>
                </CardTitle>
                <CardDescription className="text-[#515866]">
                  please login here and remember your list for today..
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-base text-white">
                      Email
                    </Label>
                    <Input type="email" placeholder="Your Email Here" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password" className="text-base text-white">
                      Password
                    </Label>
                    <Input type="password" placeholder="Your password Here" />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="text-white">
                <Button className="w-full bg-[#2167A7] md:w-1/3">log in</Button>
              </CardFooter>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
