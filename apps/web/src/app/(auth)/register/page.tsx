'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { validationSchemaRegister } from '../validationSchema';
import { Label } from '@/components/ui/label';

const Register = () => {
  const router = useRouter();
  const { register } = useRegister();
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
      },
      validationSchema: validationSchemaRegister,
      onSubmit: (values) => {
        register(values);
      },
    });

  return (
    <section className="relative h-screen w-full bg-[url('/assets/images/bg.register-login.jpg')] bg-bottom bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent">
        <div className="grid md:grid-cols-2 py-12 md:mt-7 container mx-auto px-4 md:px-12 overflow-hidden">
          {/* form section */}
          <div className="flex items-center justify-center">
            <Card className="z-50 border-none mx-[16px] w-full max-w-md">
              <CardHeader className="space-y-2">
                <CardDescription className="text-[#515866]">
                  START FOR FREE
                </CardDescription>
                <CardTitle className="text-[32px] md:text-4xl font-bold text-white inline-block">
                  Create new account <span className=" text-[#2167A7]">.</span>
                </CardTitle>
                <CardDescription className="text-[#515866] inline-block">
                  Already a Member?
                  <span
                    className="hover:underline cursor-pointer text-[#2167A7]"
                    onClick={() => router.push('/login')}
                  >
                    Log in
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <Label className="text-white text-base">Username</Label>
                    <FormInput
                      name="username"
                      label=""
                      error={errors.username}
                      isError={!!touched.username && !!errors.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Username"
                      type="text"
                      value={values.username}
                    />
                  </div>
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
                      error= {errors.password}
                      isError={!!touched.password && !!errors.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="password"
                      type="password"
                      value={values.password}
                    />
                  </div>
                  <div className="text-white flex justify-between">
                    <Button
                      type="submit"
                      className="w-full bg-[#2167A7] md:w-1/3"
                    >
                      create account
                    </Button>
                    {/* <p
                  className="cursor-pointer text-end text-xs"
                  onClick={() => router.push('/login')}
                  >
                  Already have an account ?
                </p> */}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>kanan</div>
        </div>
      </div>
    </section>
  );
};

export default Register;
