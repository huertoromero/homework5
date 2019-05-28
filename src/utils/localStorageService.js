
class StorageService{

  getItem(key){
    return localStorage.getItem(key)
  }

  setItem(key, value){
    localStorage.setItem(key, JSON.stringify(value))
  }

}

export default StorageService;