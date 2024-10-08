import styles from '@/styles/Login.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
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
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" placeholder="CPF" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha" />
            <span className={styles.eyeIcon}>👁️</span>
          </div>
          <Link href="/forgot-password" className={styles.forgotPassword}>Esqueci minha senha?</Link>
          <div className={styles.captcha}>[Captcha aqui]</div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
        <p className={styles.registerText}>
        <p>Não tem uma conta? <Link href="/register">Cadastrar-se</Link></p>
        </p>
      </div>
    </div>
  );
}
