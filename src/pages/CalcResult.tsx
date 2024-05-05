import React, { useEffect } from 'react';
import { Question, questions } from '@/constants'
import { useAppContext } from '@/components/AppContext';
import { useNavigate } from 'react-router-dom';

const CalcResultPage: React.FC = () => {
    const navigate = useNavigate();
    const { numbers, selectedAnswers } = useAppContext();

    useEffect(() => {
        if (numbers.length === 0) {
            navigate('/');
        }

        var caseDict: {[key: string]: number} = {};
        caseDict['F'] = 0;
        caseDict['U'] = 0;
        caseDict['S'] = 0;
        caseDict['C'] = 0;
        caseDict['G'] = 0;
        caseDict['P'] = 0;
        caseDict['T'] = 0;
        caseDict['M'] = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (selectedAnswers[i] === '' || selectedAnswers[i] === null) {
                navigate('/question');
            }

            let select = 0;
            if(selectedAnswers[i] === 'first') {
                select = 0;
            } else {
                select = 1;
            }

            const weight = questions[numbers[i]-1].answers[select].weight;
            caseDict[weight] += 1;
        }

        let userCase = '';

        if (caseDict['F'] > caseDict['U']) {
            userCase += 'F';
        } else {
            userCase += 'U';
        }

        if (caseDict['S'] > caseDict['C']) {
            userCase += 'S';
        } else {
            userCase += 'C';
        }

        if (caseDict['G'] > caseDict['P']) {
            userCase += 'G';
        } else {
            userCase += 'P';
        }

        if (caseDict['T'] > caseDict['M']) {
            userCase += 'T';
        } else {
            userCase += 'M';
        }

        //alert(userCase);
        //console.log(userCase);
        navigate('/result/' + userCase);
    }, [navigate, numbers, selectedAnswers]);

    return <div>Loading...</div>;
};

export default CalcResultPage