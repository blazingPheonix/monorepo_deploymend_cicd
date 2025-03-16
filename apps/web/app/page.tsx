import {client} from '@repo/prisma/client'



export default async function Home() {

  console.log('client ',client)
  // try{

    // console.log('hello world');
    // const user = await  client.user.findFirst(); 
  //   console.log('user');
  // }catch(error){
  //   console.log(error);
  //   console.log('error in fetching user or with prisma client');
  // }
  // console.log('user is ',user)
  // console.log('user is ',user);
  return (
    <div >
         {/* {user?.username}
        {user?.password}  */}
        hello world1
    </div>
  );
}
