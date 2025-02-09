export default function localeDate(date) {
    console.log(date)
    let toTimestamp = new Date(date);
    return toTimestamp.toLocaleDateString('pt-BR');
}