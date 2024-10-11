import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const loginData = {
      cpf,
      password,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login realizado com sucesso:', data);
        localStorage.setItem('token', data.token);
        router.push('/dashboard');
      } else {
        setErrorMessage(data.message || 'Erro ao realizar login.');
      }
    } catch (error) {
      console.error('Erro ao tentar realizar login:', error);
      setErrorMessage('Ocorreu um erro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <Image
          src="/LogoZenLekOFCF.png"
          alt="ZenLek Finance Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <h1>ZENLEK FINANCE</h1>
        <p>Conta Virtual & Tesouraria Online</p>
        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className={styles.eyeIcon}>👁️</span>
          </div>
          <Link href="/forgot-password" className={styles.forgotPassword}>
            Esqueci minha senha?
          </Link>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
        <p className={styles.registerText}>
          Não tem uma conta? <Link href="/register">Cadastrar-se</Link>
        </p>
      </div>
    </div>
  );
}
