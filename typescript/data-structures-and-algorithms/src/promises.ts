interface Profile {
  id?:number, 
  name:string, 
  password:string, 
  type:number,
  err? : string,
  code? : number,
  account?:string
}

export class Promises{

  private profile: Profile = { name:'', password:'', type:0 }

  constructor(name:string, password:string){
    this.profile.name = name
    this.profile.password = password
  }

  private user(user:Profile): Promise<Profile>{
    return new Promise((resolve, reject)=>{
      setTimeout (()=>{
        if(user.password == '203327'){
          user.type = 1
          user.code = 200
          user.id = 236
        resolve(user)
        }else{
          user.err = 'usuario nao encontrado'
          user.code = 404
          user.type = 0
          reject(user)
        }
      },2000)
    })
  }

  private account(user:Profile): Promise<Profile>{
    return new Promise((resolve, reject)=>{

      if(user.type <= 0 && user.code == 200){
        user.err = 'conta inexistente'
        user.code = 405
        return reject(user)
      }

      if(user.type == 1 && user.code == 200){
        user.account = 'Aluno'
        return resolve(user)
      }

      if(user.type == 2 && user.code == 200){
        user.account = 'Professor'
        return resolve(user)
      }

      if(user.type >= 3 && user.code == 200){
        user.err = 'conta nao encontrado'
        user.code = 405
        return reject(user)
      }

      user.err = 'conta inexistente por usuario nao encontrado'
      user.code = 406
      return reject(user)

    })
  }

  public async main(){

    await this.user(this.profile).then((user: Profile)=>{
      this.profile = user
    }).catch((err: Profile)=>{
      console.log('err user: ' + err.err)
      this.profile = err
    })

    await this.account(this.profile).then((user: Profile)=>{
      this.profile = user
    }).catch((err: Profile)=>{
      console.log('err account: ' + err.err)
      this.profile = err
    })

    console.log(this.profile)
  }
}



