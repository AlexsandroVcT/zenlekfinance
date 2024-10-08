import { useRouter } from 'next/router';

const router = useRouter();

const handleSubmit = (e) => {
  e.preventDefault();
  // Simular autenticação bem-sucedida
  router.push('/dashboard');
};
s