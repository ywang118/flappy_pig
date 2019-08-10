const allUsers=[]
class User {
  constructor(obj) {
    this.id=obj.id
    this.name=obj.name
    this.score=obj.score
    allUsers.push(this)
  }

  static find_by_id(id){
    return allUsers.find(user=>{
      return user.id==id})
  }

  static render_top_five(){
    let top_five=allUsers.sort(function(a,b){
      return b.score-a.score
    })
    return top_five.slice(0,5).map(user=>
       { return   `
        <li class="list"><span class="name">
        ${user.name}</span><span class="score"> ${user.score} </span></li>
         `  }).join('')
        }

}
