 function complexMaths(a,b,c,d){
      return (a*b) + (c-d)

 }
   const results= complexMaths(10,20,50,40)
   console.log(results)
    test('the expected result should be 210', ()=>{
        expect(results).toBe(210)
    })