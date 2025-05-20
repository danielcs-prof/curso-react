export function formatarCelular(valor) {
  // Remove tudo que não for número
  valor = valor.replace(/\D/g, "");

  // Limita o número a no máximo 11 dígitos
  valor = valor.slice(0, 11);

  // Aplica a máscara (xx) 99999-9999
  if (valor.length >= 2) {
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  }

  if (valor.length >= 10) {
    valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
  }

  return valor;
}

export function verificarRequisitosSenha(senha) {
  const erros = [];

  const contem8Caracteres = senha.length >= 8;
  const contemMaiuscula = /[A-Z]/.test(senha);
  const contemNumero = /[0-9]/.test(senha); // equivalente a [0-9]
  const contemEspecial = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/']/g.test(senha);

  if (!contem8Caracteres)
    erros.push("A senha deve ter no mínimo 8 caracteres.");

  if (!contemMaiuscula)
    erros.push("A senha deve conter ao menos uma letra maiúscula.");

  if (!contemNumero)
    erros.push("A senha deve conter ao menos um número.");

  if (!contemEspecial)
    erros.push("A senha deve conter ao menos um caractere especial.");

  return erros;
}


