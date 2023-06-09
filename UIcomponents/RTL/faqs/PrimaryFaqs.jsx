export default () => {

    const faqsList = [
        {
            q: "ما هي بعض الأسئلة العشوائية التي يجب طرحها؟",
            a: "هذا هو بالضبط سبب إنشاء مولد الأسئلة العشوائية هذا. هناك المئات من الأسئلة العشوائية للاختيار من بينها حتى تتمكن من العثور على السؤال العشوائي المثالي."
        },
        {
            q: "هل تقوم بتضمين أسئلة شائعة؟",
            a: "لا يتضمن هذا المولد الأسئلة الأكثر شيوعًا. الفكرة هي أنه يمكنك طرح أسئلة شائعة بمفردك ، لذا فإن معظم الأسئلة في هذا المولد."
        },
        {
            q: "هل يمكنني استخدام هذا لـ 21 سؤالاً؟",
            a: "نعم! هناك طريقتان يمكنك من خلالهما استخدام منشئ الأسئلة هذا بناءً على ما تبحث عنه. يمكنك الإشارة إلى أنك تريد إنشاء 21 سؤالاً."
        },
        {
            q: "هل هذه الأسئلة للبنات أم للفتيان؟",
            a: "الأسئلة في هذا المولد محايدة بين الجنسين ويمكن استخدامها لسؤال أي ذكر من الإناث (أو أي جنس آخر يحدده الشخص)."
        },
        {
            q: "ما هي بعض الأسئلة العشوائية التي يجب طرحها؟",
            a: "هذا هو بالضبط سبب إنشاء مولد الأسئلة العشوائية هذا. هناك المئات من الأسئلة العشوائية للاختيار من بينها حتى تتمكن من العثور على السؤال العشوائي المثالي لطرحه على الأصدقاء."
        },
        {
            q: "ماذا تتمنى لو كان لديك المزيد من المواهب تفعل؟",
            a: "إذا كنت تبحث عن طريقة للحصول على أسئلة عشوائية ، فقد وصلت إلى صفحة الويب الصحيحة. لقد أنشأنا منشئ الأسئلة العشوائية ليطرح عليك أكبر عدد من الأسئلة العشوائية التي يرغبها قلبك."
        },        
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl py-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    أسئلة متكررة
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    أجاب على جميع الأسئلة المتداولة، هل ما زلت مرتبكًا؟ لا تتردد في الاتصال بنا.
                </p>
            </div>
            <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    faqsList.map((item, idx) => (
                        <div 
                            className="space-y-3 mt-5"
                            key={idx}
                        >
                            <h4 className="text-xl text-gray-700 font-medium">
                                {item.q}
                            </h4>
                            <p className="text-gray-500">
                                {item.a}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}