class Cliente {
  String nome;
  String cpf;

  Cliente(this.nome, this.cpf);
}

main() {
  var c1 = new Cliente('saulo', '135.953.847-09');
  print(c1.nome);
}
