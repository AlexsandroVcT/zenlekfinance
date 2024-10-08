import styles from '@/styles/Register.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Register = () => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerBox}>
        <Image src='/LogoZenLekOFCF.png' alt='ZenLek Finance' width={100} height={100} />
        <h1>ZENLEK FINANCE</h1>
        <p>Crie sua conta e tenha acesso aos melhores serviços financeiros.</p>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor='cpf'>CPF</label>
            <input type='text' id='cpf' name='cpf' placeholder='Digite seu CPF' />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Digite seu Email' />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='senha'>Senha</label>
            <input type='password' id='senha' name='senha' placeholder='Crie uma senha' />
          </div>
          <div className={styles.terms}>
            Ao se cadastrar, você concorda com nossos
            <Link href='#'> Termos de Serviço</Link> e a
            <Link href='#'> Política de Privacidade</Link>.
          </div>
          <button type='submit' className={styles.registerButton}>Cadastrar</button>
        </form>
        <div className={styles.loginText}>
          Já tem uma conta? <Link href='/login'>Faça login</Link>.
        </div>
      </div>
    </div>
  );
};

export default Register;
