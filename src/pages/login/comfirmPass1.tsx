import { Input } from '@platform-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@components';
import { View } from 'react-native';

type appProps = {
  passwordConfirmLabel?: string;
  passwordLabel?: string;
  passwordConfirmPlaceholder?: string;
  passwordPlaceholder?: string;
  handleSend?: (values: { password: string }) => void;
  isLoading: boolean;
};

const validationSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

export default function ConfirmPassword({
  passwordLabel,
  passwordPlaceholder,
  handleSend,
  passwordConfirmLabel,
  passwordConfirmPlaceholder,
  isLoading,
}: appProps) {
  const { setFieldValue, handleSubmit, errors, touched } = useFormik({
    initialValues: { password: '', confirmPassword: '' },
    validationSchema,
    onSubmit: handleSend,
  });

  const setPassword = (password: string) => setFieldValue('password', password);
  const setConfirmPassword = (conPassword: string) =>
    setFieldValue('confirmPassword', conPassword);

  return (
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]'>
      <View className='space-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        <Input
          type='password'
          label={passwordLabel ? passwordLabel : 'Password'}
          placeholder={
            passwordPlaceholder ? passwordPlaceholder : 'Enter Password'
          }
          onChangeText={setPassword}
          error={errors.password && touched.password ? errors.password : ''}
        />
        <Input
          type='password'
          label={
            passwordConfirmLabel ? passwordConfirmLabel : 'Confirm Password'
          }
          placeholder={
            passwordConfirmPlaceholder
              ? passwordConfirmPlaceholder
              : 'Enter Password'
          }
          onChangeText={setConfirmPassword}
          error={
            errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : ''
          }
        />
        <Button isLoading={isLoading} text='Send' onPress={handleSubmit} />
      </View>
    </View>
  );
}