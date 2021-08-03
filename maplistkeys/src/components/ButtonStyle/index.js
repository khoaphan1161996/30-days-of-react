import Button from '../Button'

const buttonWithStyle = (CompParam,name='default') => {
    const colors = [
        {
          name: 'default',
          backgroundColor: '#e7e7e7',
          color: '#000000',
        },
        {
          name: 'react',
          backgroundColor: '#61dbfb',
          color: '#ffffff',
        },
        {
          name: 'success',
          backgroundColor: '#4CAF50',
          color: '#ffffff',
        },
        {
          name: 'info',
          backgroundColor: '#2196F3',
          color: '#ffffff',
        },
        {
          name: 'warning',
          backgroundColor: '#ff9800',
          color: '#ffffff',
        },
        {
          name: 'danger',
          backgroundColor: '#f44336',
          color: '#ffffff',
        },
      ]
      const { backgroundColor, color } = colors.find((c) => c.name === name)
    
      const buttonStyles = {
        backgroundColor,
        padding: '10px 45px',
        border: 'none',
        borderRadius: 3,
        margin: 3,
        cursor: 'pointer',
        fontSize: '1.25rem',
        color,
      }
      return (props) => {
        return <CompParam {...props} style={buttonStyles} />
      }
  }
    export const NewButton = buttonWithStyle(Button)
    export const ReactButton = buttonWithStyle(Button, 'react')
    export const InfoButton = buttonWithStyle(Button, 'info')
    export const SuccessButton = buttonWithStyle(Button, 'success')
    export const WarningButton = buttonWithStyle(Button, 'warning')
    export const DangerButton = buttonWithStyle(Button, 'danger')
 