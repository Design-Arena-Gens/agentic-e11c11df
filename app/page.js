'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Welcome to Your App
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          lineHeight: '1.8',
          marginBottom: '30px'
        }}>
          This is a modern Next.js application deployed on Vercel.
          Built with React and ready for your next great idea.
        </p>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Documentation
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'white',
              color: '#667eea',
              padding: '12px 30px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              border: '2px solid #667eea',
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Learn Next.js
          </a>
        </div>
      </div>
      <footer style={{
        marginTop: '40px',
        color: 'white',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>
        Powered by Next.js & Vercel
      </footer>
    </div>
  );
}
