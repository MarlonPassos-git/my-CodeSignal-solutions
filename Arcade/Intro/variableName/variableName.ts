function solution2(name: string): boolean {
    const regexp = /^([^\d\s\|\[\]\#\$\%\^\&\*\(\)\-\!])([\w\_])*$/gm
    
    return regexp.test(name)
}
 
