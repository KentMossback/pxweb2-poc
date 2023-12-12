import styled from 'styled-components';
import { Tag } from './Tag';
import { useState } from 'react';
import { ExpandButton } from './ExpandButton';
import { MultiSelect } from './MultiSelect';
import { AnimatePresence, motion } from 'framer-motion';


const Card = styled.div`
    border-radius: 12px;
    padding: 14px 20px 20px 20px;
    background-color: #F5F5F5;
`

const StyledTitle = styled.h3`
    font-size: 20px;
    line-height: 32px;
    margin: 0;
`

const TitleRow = styled.div`
    display: flex;
`

type VariableSelectorType = {
    /**
   * Title of the variable
   */
    title: string,
    required: boolean,
    values: { label: string, code: string }[],
    code: string,
    onChange: (variableCode: string, valueCode: string[]) => void;
}

export const VariableSelector = ({ title, required, values, code, onChange }: VariableSelectorType) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [searchParam, setSearchParam] = useState<string>("");
    const filteredValues = values.filter((value) => value.label.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()))

    const updateSelectedIds = (selectedIds: string[]) => {
        setSelectedIds(selectedIds);
        onChange(code, selectedIds)
    }
    return <Card>
        <TitleRow>
            <StyledTitle>{title}</StyledTitle>
            <ExpandButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
        </TitleRow>
        <Tag roundedStyle="light">Valt {selectedIds.length} av {values.length}</Tag>
        {required && <Tag roundedStyle="heavy">Obligatorisk</Tag>}
        <AnimatePresence>
            {isExpanded && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                {values.length > 20 && 
                    <>
                        <label htmlFor="filtersearch">Sök</label>                
                        <input type="text" id="filtersearch" onChange={(e)=> setSearchParam(e.target.value)  }></input> 
                    </>
                }    
                <MultiSelect values={filteredValues} selectedIds={selectedIds} setSelectedIds={updateSelectedIds} /></motion.div>}
        </AnimatePresence>
    </Card>
}   