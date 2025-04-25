import { FooterSlot } from "@/components/auth/FooterSlot";
import { SignUpForm } from "@/components/form/SignUpForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout
      footerSlot={
        <FooterSlot
          comment="이미 회원이신가요?"
          link="/login"
          linkTitle="로그인"
        />
      }
    >
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
