import { FooterSlot } from "@/components/auth/FooterSlot";
import { LoginForm } from "@/components/form/LoginForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

const Login = () => {
  return (
    <AuthLayout
      footerSlot={
        <FooterSlot
          comment="판다마켓이 처음이신가요?"
          link="/signup"
          linkTitle="회원가입"
        />
      }
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
