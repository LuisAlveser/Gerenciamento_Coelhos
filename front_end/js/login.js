async function loginUsuario() {
  const form = document.getElementById("loginForm");
  const email = form.email.value.trim();
  const senha = form.senha.value;

  if (!email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    if (response.ok) {
      const data = await response.json();
      
      // Salva o ID do usuário no localStorage
      localStorage.setItem("id_usuario", data.usuario.id_usuario);
      
      alert(data.mensagem);
      window.location.href = "index.html";
    } else {
      alert("Email ou senha inválidos.");
    }

  } catch (error) {
    alert("Erro na requisição. Tente novamente.");
    console.error(error);
  }
}
async function loginUsuario() {
  const form = document.getElementById("loginForm");
  const email = form.email.value.trim();
  const senha = form.senha.value;

  if (!email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    if (response.ok) {
      const data = await response.json();
      
      // Salva o ID do usuário no localStorage
      localStorage.setItem("id_usuario", data.usuario.id_usuario);
      
      alert(data.mensagem);
      window.location.href = "index.html";
    } else {
      alert("Email ou senha inválidos.");
    }

  } catch (error) {
    alert("Erro na requisição. Tente novamente.");
    console.error(error);
  }
}
