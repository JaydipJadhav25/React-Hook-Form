
import {useForm} from "react-hook-form"
import  RTE from "./RTE"
import Input from "./Input";
import { useCallback , useEffect } from "react";

const PostFrom = () => {
  const{ register , handleSubmit , watch , setValue , getValues, control} = useForm();
        
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

useEffect(() => {
  // Watch for changes in the form
  const subscription = watch((value, { name }) => {
    // If the "title" field changes
    if (name === "title") {
      // Convert the title to a slug and set it in the "slug" field
      setValue("slug", slugTransform(value.title), { shouldValidate: true });
    }
    if(name === "name"){
      setValue("slug2" , slugTransform(value.name) , { shouldValidate : true})
    }
  });

  // Stop watching when the component is done
  return () => subscription.unsubscribe();
}, [watch, slugTransform, setValue]);


const submit = async(data) =>{
  console.log(data);
}


  return (
   
    <div className="bg-sky-600">
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2 bg-cyan-400">

        <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4 bg-orange-800"
                    
                    {...register("title", { required: true })}
        />

              <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                      //set value in slug field:
                      console.log("e.currentTarget.value : "  , e.currentTarget.value )
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />     
 

      <Input
                    label="name :"
                    placeholder="enter your name"
                    className="mb-4"
                    {...register("name", { required: true })}
        />
         <Input
                    label="slug2 :"
                    placeholder="slug2"
                    className="mb-4"
                    {...register("slug2", { required: true })}
                    onInput={(e)=>{
                      setValue("slug2" , slugTransform(e.currentTarget.value) , { shouldValidate : true})
                    }}
        />


      <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
             <button className="w-full bg-sky-900">Submit</button>
        </div>



            
            
            </form>    
    </div>
   
  )
}

export default PostFrom