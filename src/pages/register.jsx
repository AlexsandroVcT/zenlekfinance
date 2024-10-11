import { useState } from 'react';
import styles from '@/styles/Register.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  // Estados para os campos do formulário
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const registerData = {
      firstName,
      lastName,
      documentNumber: cpf,
      email,
      phone,
      birthdate,
      zipCode,
      street,
      number,
      city,
      state,
      district,
      password,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Cadastro realizado com sucesso:', data);
        // Redirecionar ou exibir mensagem de sucesso
      } else {
        console.log('Erro no cadastro:', data.message);
      }
    } catch (error) {
      console.error('Erro ao tentar cadastrar:', error);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerBox}>
        <Image
          src="/LogoZenLekOFCF.png"
          alt="ZenLek Finance Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <h1>ZENLEK FINANCE</h1>
        <p>Crie sua conta e tenha acesso aos melhores serviços financeiros.</p>
        <form onSubmit={handleRegister}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">Primeiro Nome</label>
            <input 
              type="text" 
              id="firstName" 
              placeholder="Digite seu primeiro nome" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName">Último Nome</label>
            <input 
              type="text" 
              id="lastName" 
              placeholder="Digite seu último nome" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="cpf">CPF</label>
            <input 
              type="text" 
              id="cpf" 
              placeholder="Digite seu CPF" 
              value={cpf} 
              onChange={(e) => setCpf(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Digite seu Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Telefone</label>
            <input 
              type="text" 
              id="phone" 
              placeholder="Digite seu telefone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="birthdate">Data de Nascimento</label>
            <input 
              type="date" 
              id="birthdate" 
              placeholder="Digite sua data de nascimento" 
              value={birthdate} 
              onChange={(e) => setBirthdate(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="zipCode">CEP</label>
            <input 
              type="text" 
              id="zipCode" 
              placeholder="Digite seu CEP" 
              value={zipCode} 
              onChange={(e) => setZipCode(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="street">Rua</label>
            <input 
              type="text" 
              id="street" 
              placeholder="Digite sua rua" 
              value={street} 
              onChange={(e) => setStreet(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="number">Número</label>
            <input 
              type="text" 
              id="number" 
              placeholder="Digite o número" 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="city">Cidade</label>
            <input 
              type="text" 
              id="city" 
              placeholder="Digite sua cidade" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="state">Estado</label>
            <input 
              type="text" 
              id="state" 
              placeholder="Digite seu estado" 
              value={state} 
              onChange={(e) => setState(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="district">Bairro/Distrito</label>
            <input 
              type="text" 
              id="district" 
              placeholder="Digite seu bairro ou distrito" 
              value={district} 
              onChange={(e) => setDistrict(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Crie uma senha" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className={styles.registerButton}>Cadastrar</button>
        </form>
        <p className={styles.loginText}>
          Já tem uma conta? <Link href="/login">Faça login.</Link>
        </p>
      </div>
    </div>
  );
}
