import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter(); // Aqui dentro do componente, não no topo

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => router.push('/login')}>Ir para Login</button>
    </div>
  );
};

export default Dashboard;
