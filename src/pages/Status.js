
const statuses = [
  { label: 'Recebido', icon: '🔵' },
  { label: 'Em preparo', icon: '🟡' },
  { label: 'Saiu para entrega', icon: '🟠' },
  { label: 'Entregue', icon: '🟢' }
];

function Status() {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prevIndex) => (prevIndex + 1) % statuses.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const currentStatus = statuses[statusIndex];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Status do Pedido</h1>
      <p role="status">
        Status atual: <strong>{currentStatus.icon} {currentStatus.label}</strong>
      </p>

      <div style={{ marginTop: '2rem' }}>
        {statuses.map((status, index) => (
          <div
            key={status.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem',
              opacity: index <= statusIndex ? 1 : 0.5,
              transition: 'opacity 0.5s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>
              {status.icon}
            </span>
            <span>{status.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Status;
