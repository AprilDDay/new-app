<template>
    <div id="event-handling">
        <span>Message: {{ msg }}</span>
     </div>    
</template>

<script>

    //const msg= "Hello Earthlings";
  
export default {
    name: 'Counter',
    props: {
        msg: String
    }  
}  
</script>