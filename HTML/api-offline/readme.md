# SObre os arquivos de Manifest

## CACHE:

### É a seção padrão para entradas. Os arquivos listados sob esse cabeçalho (ou imediatamente após CACHE MANIFEST) serão explicitamente armazenados em cache após o primeiro download.

## NETWORK:

### Os arquivos listados nessa seção são recursos seguros que necessitam de conexão com o servidor. Todas as solicitações para esses recursos ignoram o cache, mesmo que o usuário esteja off-line. Podem ser usados caracteres curingas.

## FALLBACK:

### Uma seção opcional que especifica páginas substitutas caso um recurso não possa ser acessado. O primeiro URI é o recurso; o segundo é o substituto. Os dois URIs devem ser relativos e ter a mesma origem do arquivo de manifesto. Podem ser usados caracteres curingas.  

## Mais informações:
[Artigo LINK](https://www.html5rocks.com/pt/tutorials/appcache/beginner/)