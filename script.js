function showSection(sectionId) {
    // إخفاء كل الأقسام
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = "none";
    });

    // إظهار القسم المطلوب
    document.getElementById(sectionId).style.display = "block";
}
