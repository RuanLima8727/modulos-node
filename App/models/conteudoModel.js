module.exports = () => {
    this.getConteudo = (connection,callback) => {
        connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'", callback)

        }

    this.salvarConteudo = (conteudo, connection, callback) => {
        connection.query("INSERT INTO conteudo set ?", conteudo)
    }    
        return this;
}