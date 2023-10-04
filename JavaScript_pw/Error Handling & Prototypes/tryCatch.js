try {
     let x = undefined;
     console.log(x[0]);
} catch {
     console.log("Error handling in catch");
    //  catch (err){
    //     console.log("Error handling in catch", err);    =>>>> to display the error
} finally {
    console.log(" Finally Always gets executed");
}