function createConfig(token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }
  
  export default createConfig;