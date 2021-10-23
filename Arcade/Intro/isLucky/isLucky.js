function isLucky(ticket_number) {
    
    const string_ticket = String(ticket_number);
    const half = string_ticket.length / 2;
    let sum_first_half = 0;
    let sum_second_half = 0;
     
    for (let i = 0; i < string_ticket.length; i++ ) {
        
        const number = string_ticket[i];
        
        if (i < half) sum_first_half += +number
        else sum_second_half += +number
    }
    
    return sum_first_half == sum_second_half  
}

