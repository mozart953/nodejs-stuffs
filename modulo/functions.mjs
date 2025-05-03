//const lista = [1, 2, 3, 4, 5];

export function suma(...b) {
    return b.reduce((a, b) => a + b, 0);
}

// Función para restar dos números
export const subtract = (a, b) => {
    return a - b;
};

// Función para multiplicar dos números
export const multiply = (a, b) => {
    return a * b;
};

// Función para dividir dos números
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
};
