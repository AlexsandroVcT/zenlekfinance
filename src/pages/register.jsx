import styles from '@/styles/Register.module.scss';
import Image from 'next/image';
import logo from '../../public/LogoZenLekOFCF.png';

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="ZenLek Finance" width={120} height={120} />
        <h1>ZenLek Finance</h1>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Nome Completo" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Senha" className={styles.input} />
        <input type="password" placeholder="Confirme a Senha" className={styles.input} />
        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
      <div className={styles.login}>
        <p>Já tem uma conta? <a href="/login">Faça login</a></p>
      </div>
    </div>
  );
};

export default Register;
