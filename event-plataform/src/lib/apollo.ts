import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4olf2gx0eo101z40fiub6qk/master",
  headers:{
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYxMDIwODksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG9sZjJneDBlbzEwMXo0MGZpdWI2cWsvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2Q3YzlhOTUtNDJlOC00NGE2LThkYzEtMDFjOTJiNDMwZWI0IiwianRpIjoiY2w0c3dmYWJjMm4zNjAxd2I5b2tyZ2g1ciJ9.vTKuHEDuW53-L8bW2CwVF0WrUZWvw-UjWODgo3eoC1e3JUpt860ZL5kd3JdnAingSKhTYg9dnSe3TuJBHPFnSfez70c86-V9IT1TOt2mOs-W4zAhWQ6-b0S0Snw8_IsZLjZwrIYk3NISDut9Nm04zixa2zgbludLdtYkJWIo3wY1ZxchXUUGE62XuUKdp6o5tUNcslFdNJmgI4mELc_Xi92xgmrP7YmtM-gxwfph51zXRaEMj9nlmoMRxJeilaum8atVDgHNEwTG5ZlFquglDY9mgDpEPf_AX81wAB5CFDo1UtlCS05jcSOEdb0RqR5HYWUiY84zGtJGDeyqXkxzY_Sta4ScOjbChT4YzI5oCBbjQY25og2p6Yj1g2yuu6AyisYO9JEUXvMHT7-D5b7H5bdu82gwdhnAYdyOZzQl4JhhRRsms8xzdcvjpOa6Moe2T_gAF6d-iOSNuzz8QlCpGHzRNYtGdM31c55plF-qT8tzDqUFEjNnVjIlkdhIkXTs-Scknecw9zStRGHwM9G9FZ_f2AD3G-ecF4TLuGF1w_48WQVRutygNv5kN4tGZQS5db2ApSRYsODLiH83J4WnYwUsZDBFQpVhetQk2TBI61vbS8PcC__jhTXT2BSWbW-adEhBILMO_1Ct5mdNJv_kj1kYTVNrfIC-ryyu49WmDhI'
  },
  cache: new InMemoryCache(),
});
