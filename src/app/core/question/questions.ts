export class Questions {
    surveyId: string
    userId: string
    questionId: string
    questionType: string
    isMandatory: boolean=true
    isHavingMultimedia: boolean=false
    isRandomized: boolean =true
    isHorizontal:boolean=true
    isVertical:boolean=false
    languageCode: string='en'
    orderNumber: string
    pageNumber: string
    questionStatus: string
    questionText: string
    options: any[]
    threshold:number=0
    icon:string
}
