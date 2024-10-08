import styles from '@/styles/Login.module.scss';
import Image from 'next/image';
import logo from '../../public/LogoZenLekOFCF.png';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="ZenLek Finance" width={120} height={120} />
        <h1>ZenLek Finance</h1>
      </div>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Senha" className={styles.input} />
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <div className={styles.register}>
        <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
      </div>
    </div>
  );
};

export default Login;
