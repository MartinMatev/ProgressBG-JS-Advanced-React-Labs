var email = 'namedomain';
try {
    const validatedEmail = validateEmail(email);
    if(validatedEmail instanceof Error) {
        console.error(`Anticipated: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail}`);
    }
} catch(err) {
    console.error(`Unanticipated: ${err.message}`);
}

function validateEmail(email) {
    return email.match(/[\w.-]@\w+\.\w+/) ?
        email : new Error(`invalid email: ${email}`);
}